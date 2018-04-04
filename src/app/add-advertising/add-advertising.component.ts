import { MainService } from './../Services/main.service';

import { element } from 'protractor';
import { Component } from '@angular/core';

@Component({
    selector: 'add-advertising',
    templateUrl: 'add-advertising.component.html',
    styleUrls: ['add-advertising.component.scss']
})
export class AddAdvertisingComponent {

    cities;
    categories;
    keyFilter = [];
    vetcorKeyFilter = [];
    subCategories;
    search = {};
    isAgree = false;
    images = [];
    imageOnLoad: any = [];
    loader;
    constructor(public mainServ: MainService) {
        this.search['fields'] = [];
        this.loader = false;
    }


    ngOnInit() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        this.mainServ.APIServ.get("cities").subscribe(data => {
            if (this.mainServ.APIServ.getErrorCode() == 0)
                this.cities = data;
            else
                this.mainServ.globalServ.somthingError()
        });
        this.mainServ.APIServ.get("categories?filter=%7B%22include%22%3A[%22subCategories%22]%7D").subscribe(data => {
            if (this.mainServ.APIServ.getErrorCode() == 0)
                this.categories = data;
            else
                this.mainServ.globalServ.somthingError()
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
        this.mainServ.APIServ.uploadImage("files/images/upload", event.target.files, files.length).subscribe((data: any) => {
            this.imageOnLoad = [];

            if (this.mainServ.APIServ.getErrorCode() == 0)
                data.forEach(element => {
                    this.images.push(element);
                });
            else
                this.mainServ.globalServ.somthingError()
        });
    }

    changeCategory(categortID) {
        this.subCategories = this.categories.find(x => x.id == categortID).subCategories;
        this.keyFilter = this.categories.find(x => x.id == categortID).fields;
        this.vetcorKeyFilter = [];
        if (this.keyFilter)
            this.keyFilter.forEach((element, index) => {
                if (element.type == "choose") {
                    var tempValue = [];
                    element.values.forEach(elementValue => {
                        tempValue.push({ value: elementValue.value, fields: elementValue.fields })
                    });
                    this.vetcorKeyFilter.push({ type: element.type, key: element.key, values: tempValue, lengthChilde: 0 })

                }
                else
                    this.vetcorKeyFilter.push({ type: element.type, key: element.key })
                this.search['fields'][index] = {};
            });

    }

    changeSubCategory(subCategoryID) {
        if (this.keyFilter)
            var lastLength = this.vetcorKeyFilter.length;
        else {
            this.keyFilter = [];
            var lastLength = 0;
        }
        var newFields = this.categories.find(x => x.id == this.search["categoryId"]).subCategories.find(y => y.id == subCategoryID).fields;
        newFields.forEach(element => {
            this.keyFilter.push(element);
        });
        for (var index = lastLength; index < this.keyFilter.length; index++) {
            alert(lastLength);
            var element = this.keyFilter[index];
            if (element.type == "choose") {
                var tempValue = [];
                element.values.forEach(elementValue => {
                    tempValue.push({ value: elementValue.value, fields: elementValue.fields })
                });
                this.vetcorKeyFilter.push({ type: element.type, key: element.key, values: tempValue, lengthChilde: 0 })
            }
            else
                this.vetcorKeyFilter.push({ type: element.type, key: element.key })
            this.search['fields'][index] = {};
        };
    }

    // changeSubCategory(subCategoryID) {
    //     this.search['fields'] = [];
    //     this.keyFilter = this.categories.find(x => x.id == this.search["categoryId"]).subCategories.find(y => y.id == subCategoryID).fields;
    //     this.keyFilter.forEach((element, index) => {
    //         this.search['fields'][index] = {};
    //     });
    // }

    deleteFielde(field, indexFields) {
        var length = field.lengthChilde;
        for (var indexDel = 0; indexDel < length; indexDel++) {
            if (this.vetcorKeyFilter[indexFields + 1].type == "choose" && this.vetcorKeyFilter[indexFields + 1].lengthChilde > 0) {
                this.deleteFielde(this.vetcorKeyFilter[indexFields + 1], indexFields + 1);
            }
            this.vetcorKeyFilter.splice(indexFields + 1, 1)
            this.search["fields"].splice(indexFields + 1, 1)
        }
    }

    changeValue(value, indexFields) {
      
        var field = this.vetcorKeyFilter[indexFields];
      
        this.deleteFielde(this.vetcorKeyFilter[indexFields], indexFields );


        var option = field.values.find(x => x.value == value);
        field.lengthChilde = option.fields.length;
        for (var index = option.fields.length; index > 0; index--) {
            var element = option.fields[index - 1];
            if (element.type == "choose") {
                var tempValue = [];
                element.values.forEach(elementValue => {
                    tempValue.push({ value: elementValue.value, fields: elementValue.fields })
                });
                this.vetcorKeyFilter.splice(indexFields + 1, 0, { type: element.type, key: element.key, values: tempValue, lengthChilde: 0 })

            }
            else
                this.vetcorKeyFilter.splice(indexFields + 1, 0, { type: element.type, key: element.key })
            this.search["fields"].splice(indexFields + 1, 0, {})
        }
      
    }

    openSelectImage() {
        document.getElementById('files').click();
    }

    addAdvertising() {
        if (this.isAgree) {
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
            this.vetcorKeyFilter.forEach((element, index) => {
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
            this.search['ownerId'] = this.mainServ.loginServ.getUserId();
            if (fieldName == "") {
                this.loader = true;
                this.mainServ.APIServ.post("advertisemets", this.search).subscribe((data: any) => {
                    this.loader = false;
                    if (this.mainServ.APIServ.getErrorCode() == 0) {
                        this.mainServ.globalServ.goTo("detail/" + data.id)
                    } else if (this.mainServ.APIServ.getErrorCode() == 403) {
                        this.mainServ.APIServ.setErrorCode(0);
                        this.mainServ.globalServ.errorDialog("فشل إضافة إعلان", "الرجاء التأكد من أن الحساب مفعل");
                    } else
                        this.mainServ.globalServ.somthingError()

                });
            }
            else {
                this.mainServ.globalServ.errorDialog(" خطأ إدخال", "الرجاء التحقق من ملئ " + fieldName + " بالقيمه المناسبه ")
            }
        }
    }

    deleteImage(index) {
        this.images.splice(index, 1);
    }
}
