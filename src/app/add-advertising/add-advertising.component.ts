import { LoginService } from './../Services/login.service';
import { element } from 'protractor';
import { CallApiService } from './../Services/call-api.service';
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
    subCategories;
    search = {};

    images = [];
    constructor(public APIServ: CallApiService,public loginSer:LoginService) {
        this.search['fields'] = [];
    }


    ngOnInit() {
        this.APIServ.get("cities").subscribe(data => {
            this.cities = data;
        });
        this.APIServ.get("categories?filter=%7B%22include%22%3A[%22subCategories%22]%7D").subscribe(data => {
            this.categories = data;
        });
    }

    onChange(event: any) {
        let files = [].slice.call(event.target.files);
        this.APIServ.uploadImage("files/images/upload", event.target.files, files.length).subscribe((data: any) => {
            data.forEach(element => {
                this.images.push(element);
            });
        });
    }

    changeCategory(categortID) {
        this.subCategories = this.categories.find(x => x.id == categortID).subCategories;
        this.keyFilter = [];
        this.search['fields']=[];        
    }
    changeSubCategory(subCategoryID) {
        this.search['fields']=[];
        this.keyFilter = this.categories.find(x => x.id == this.search["categoryId"]).subCategories.find(y => y.id == subCategoryID).fields;
        this.keyFilter.forEach((element, index) => {
            this.search['fields'][index]={};
        });
    }


    openSelectImage() {
        document.getElementById('files').click();
    }

    addAdvertising() {
        this.keyFilter.forEach((element, index) => {
            this.search['fields'][index].key = element.key;
            this.search['fields'][index].type = element.type;
        });
        this.search['images'] = this.images
        this.search['ownerId']=this.loginSer.getUserId();
        console.log(this.search);
        this.APIServ.post("advertisemets",this.search).subscribe((data: any) => {
           
        });
    }
}
