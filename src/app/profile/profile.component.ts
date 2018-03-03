import { ActivatedRoute } from '@angular/router';
import { GlobalService } from './../Services/global.service';
import { LoginService } from './../Services/login.service';
import { CallApiService } from './../Services/call-api.service';
import { Component } from '@angular/core';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})
export class ProfileComponent {
    tabNow;
    loader;


    imageProfile = "assets/imgs/defult_img.jpg";
    uploadingImage = false;
    
    userID
    isMyProfile=false;
    userData
    follwers
    bookmarks = [];
    advertisemets = [];
    constructor(public APIServe: CallApiService, logInSer: LoginService, public globalServ: GlobalService, private route: ActivatedRoute) {
        let param;
        this.route.params.subscribe(data => param = data.userID);
        if (param == "me") {
            this.isMyProfile=true;
            this.userID = logInSer.getUserId();
        }
        else
            this.userID = param
        this.setTab(1);
    }
    ngOnInit() {
        this.APIServe.get("users/" + this.userID + "/followers").subscribe(data => {
            this.follwers = data;
        });
        this.getData(true);

        if(this.isMyProfile)
        this.APIServe.get("users/me").subscribe(data => {
            this.userData = data;
        });
        else{
           this.APIServe.get("users/"+this.userID).subscribe(data => {
            this.userData = data;
        }); 
        }
        this.getData(false);

    }

    openSelectImage() {
        document.getElementById('files').click();
    }

    releadImage(file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var id = 'uploadImage';
            document.getElementById(id).setAttribute('src', reader.result);
            // this.text = reader.result;
        }
        reader.readAsDataURL(file);
    }
    onChange(event: any) {
        this.uploadingImage = true;
        let Fille = event.target.files[0];
        this.releadImage(Fille);


        this.APIServe.uploadImage("files/images/upload", event.target.files, 1).subscribe((data: any) => {
            this.uploadingImage = false;
            data.forEach(element => {
                this.imageProfile = element;
            });
        });
    }


    calculateDate(date) {
        return this.globalServ.calculatDateAdv(date);
    }

    setTab(tabNum) {
        this.tabNow = tabNum;
    }

    isSetTab(tabNum) {
        return this.tabNow == tabNum
    }

    getData(isBookMark, isScrol: boolean = false) {

        this.loader = true;
        let url, query, skip, limit;
        limit = 10;
        if (isScrol == true) {
            if (!isBookMark)
                skip = this.advertisemets.length;
            else
                skip = this.bookmarks.length;
        } else {
            skip = 0;
        }

        if (isBookMark) {
            url = "users/" + this.userID + "/bookmarks?filter=";
            query = { "order": "createdAt ASC", "limit": limit, "skip": skip };
        } else {
            url = "advertisemets/actived?filter=";
            query = { "where": { "ownerId": this.userID }, "order": "createdAt ASC", "limit": limit, "skip": skip };
        }
        this.APIServe.get(url + JSON.stringify(query)).subscribe((data: any) => {
            if (isBookMark) {
                data.forEach(element => {
                    this.bookmarks.push(element);
                });
            } else {
                data.forEach(element => {
                    this.advertisemets.push(element);
                });
            }
            this.loader = false;
        });

    }
}
