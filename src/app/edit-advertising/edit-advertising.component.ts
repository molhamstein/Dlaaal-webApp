import { ActivatedRoute } from '@angular/router';
import { LoginService } from './../Services/login.service';
import { CallApiService } from './../Services/call-api.service';
import { GlobalService } from './../Services/global.service';
import { Component } from '@angular/core';

@Component({
    selector: 'edit-advertising',
    templateUrl: 'edit-advertising.component.html',
    styleUrls: ['edit-advertising.component.scss']
})
export class EditAdvertisingComponent {

    cities;
    categories;
    keyFilter = [];
    subCategories;
    search = {};
    isAgree = false;
    images = [];
    imageOnLoad: any = [];
    loader: boolean;
    addID;
    constructor(public globalSer: GlobalService, public APIServ: CallApiService, private route: ActivatedRoute, public loginSer: LoginService) {
        // this.search['fields'] = [];
        this.route.params.subscribe(addID => this.addID = addID.addID);
        this.loader = false;

    }


    ngOnInit() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        this.APIServ.get("cities").subscribe(data => {
            this.cities = data;
        });
        this.APIServ.get("categories?filter=%7B%22include%22%3A[%22subCategories%22]%7D").subscribe(data => {
            this.categories = data;
            this.APIServ.get("advertisemets/" + this.addID).subscribe(data => {
                if (this.APIServ.getErrorCode() == 0) {
                    this.search = data;
                    this.changeCategory(this.search['categoryId'], true);
                    this.changeSubCategory(this.search['subCategoryId'], true);
                    this.images = this.search['images'];
                } else
                    this.globalSer.somthingError()
            });
        });

    }

    releadImage(innerIndex, file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var id = 'uploadImage' + innerIndex;
            document.getElementById(id).setAttribute('src', reader.result);
            // this.text = reader.result;
        }
        reader.readAsDataURL(file);
    }
    onChange(event: any) {
        let files = [].slice.call(event.target.files);
        let allFilles = event.target.files;
        this.imageOnLoad = Array(files.length);
        var innerIndex = 0;
        for (var i = 0; i < allFilles.length; i++) {
            var file = allFilles[i];
            var x;
            console.log("fromOut");
            console.log(i);
            this.releadImage(i, file);

        }
        this.APIServ.uploadImage("files/images/upload", event.target.files, files.length).subscribe((data: any) => {
            this.imageOnLoad = [];
            data.forEach(element => {
                this.images.push(element);
            });
        });
    }

    changeCategory(categortID, isFirst: boolean = false) {
        this.subCategories = this.categories.find(x => x.id == categortID).subCategories;
        this.keyFilter = [];
        if (!isFirst) {
            this.search['fields'] = [];
            this.search['category'] = this.categories.find(x => x.id == categortID);
        }
    }
    changeSubCategory(subCategoryID, isFirst: boolean = false) {
        this.keyFilter = this.categories.find(x => x.id == this.search["categoryId"]).subCategories.find(y => y.id == subCategoryID).fields;
        if (!isFirst) {
            this.search['subCategory'] = this.categories.find(x => x.id == this.search["categoryId"]).subCategories.find(y => y.id == subCategoryID)
            this.search['fields'] = [];
            this.keyFilter.forEach((element, index) => {
                this.search['fields'][index] = {};
            });
        }
    }


    openSelectImage() {
        document.getElementById('files').click();
    }

    editAdvertising() {
        let fieldName = ""
        if (this.search['address'] == "" || this.search['address'] == null) {
            fieldName = "عنوان الإعلان"
        } else if (this.search['price'] == "" || this.search['price'] == null) {
            fieldName = "السعر"
        } else if (this.search['cityId'] == "" || this.search['cityId'] == null) {
            fieldName = "المدينة"
        } else if (this.search['categoryId'] == "" || this.search['categoryId'] == null) {
            fieldName = "الفئة"
        } else if (this.search['subCategoryId'] == "" || this.search['subCategoryId'] == null) {
            fieldName = "الفئة الفرعية"
        } else if (this.search['title'] == "" || this.search['title'] == null) {
            fieldName = "العنوان"
        } else if (this.search['description'] == "" || this.search['description'] == null) {
            fieldName = "شرح"
        }
        this.keyFilter.forEach((element, index) => {
            this.search['fields'][index].key = element.key;
            this.search['fields'][index].type = element.type;
            if ((this.search['fields'][index].value == "" || this.search['fields'][index].value == null) && fieldName == "") {
                fieldName = element.key;
            }
        });
        this.search['images'] = this.images
        if (this.search['images'].length == 0 && fieldName == "") {
            fieldName = "الصور";
        }
        this.search['ownerId'] = this.loginSer.getUserId();
        if (fieldName == "") {
            this.search['city'] = this.cities.find(x => x.id == this.search["cityId"]);
            this.loader = true;
            this.APIServ.put("advertisemets/" + this.search["id"], this.search).subscribe((data: any) => {
                this.loader = false;
                if (this.APIServ.getErrorCode() == 0) {
                    this.globalSer.goTo("detail/" + data.id)
                } else if (this.APIServ.getErrorCode() == 403) {
                    this.APIServ.setErrorCode(0);
                    this.globalSer.errorDialog("فشل إضافة إعلان", "الرجاء التأكد من أن الحساب مفعل");
                } else this.globalSer.somthingError();
            });
        }
        else {
            this.globalSer.errorDialog(" خطأ إدخال", "الرجاء التحقق من ملئ " + fieldName + " بالقيمه المناسبه ")
        }

    }

    deleteImage(index) {
        this.images.splice(index, 1);
    }
}
