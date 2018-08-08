import { MainService } from './../Services/main.service';

import { element } from 'protractor';
import { Component } from '@angular/core';
import { ImageCompressService, ResizeOptions, ImageUtilityService, IImage, SourceImage } from 'ng2-image-compress';

import * as Pica from 'pica/dist/pica';

import { Ng2ImgMaxService } from 'ng2-img-max';


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
    processedImages: any = [];
    showTitle = false;

    loader;
    constructor(public mainServ: MainService, public ng2ImgMaxService: Ng2ImgMaxService, private imgCompressService: ImageCompressService) {
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

    maxWidth = 8000;
    maxHeight = 5000
    resize(filesTarget) {
        let pica = Pica({ features: ['js', 'wasm', 'ww', 'cib'] });

        let imageTarget = filesTarget;
        // imageTarget.onload = (image) => {
        let currentWidth = imageTarget.naturalWidth || imageTarget.width;
        let currentHeight = imageTarget.naturalHeight || imageTarget.height;
        console.log("currentWidth")
        console.log(currentWidth)
        let newWidth = currentWidth;
        let newHeight = currentHeight;
        if (newWidth > this.maxWidth) {
            newWidth = this.maxWidth
            //resize height proportionally
            let ratio = this.maxWidth / currentWidth; //is gonna be <1
            newHeight = newHeight * ratio;
        }
        currentHeight = newHeight;
        if (newHeight > this.maxHeight) {
            newHeight = this.maxHeight;
            //resize width proportionally
            let ratio = this.maxHeight / currentHeight; //is gonna be <1
            newWidth = newWidth * ratio;
        }
        if (newHeight === currentHeight && newWidth === currentWidth) {// no need to resize, upload now
            // this.utilityLoading = false;
            // this.uploadImage(fileTarget); // this is your functions to upload after you reisze
        }
        else {
            // To canvas
            let toCanvas: HTMLCanvasElement = document.createElement('canvas');
            toCanvas.width = newWidth;
            toCanvas.height = newHeight;
            pica.resize(imageTarget, toCanvas)
                .then(result => pica.toBlob(result, 'image/jpeg', 90))
                .then((blob: Blob) => {
                    // this.utilityLoading = false;
                    // let file: any = blob;
                    // file.name = fileTarget.name;
                    // this.uploadImage(<File>file) // this is your functions to upload after you reisze
                })
                .catch(error => {
                    // this.utilityLoading = false;
                    console.error('resizing error:' + error.message, error);
                })
        }
        // }
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

    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    onChange(event: any) {
        let files = [].slice.call(event.target.files);
        let allFilles = event.target.files;
        let images: any = [];
        this.imageOnLoad = Array(files.length);
        var innerIndex = 0;
        for (var i = 0; i < allFilles.length; i++) {
            var file = allFilles[i];
            var x;
            console.log("fromOut");
            console.log(i);
            this.releadImage(i, file);
        }
        let files2 = Array.from(event.target.files);



        //         this.ng2ImgMaxService.compressImage(fileTarget, this.maxSize, true)
        // .subscribe( 
        //    result => {
        //    this.resize(result);
        //    },
        //    err => {
        //    console.error('error when compressed',err)
        //    this.uploadImage(err.compressedFile)
        //       }
        //   )
        files.forEach((fileElement, index) => {
            let countDelete = 0
            this.ng2ImgMaxService.compress([fileElement], 0.5, true, true).subscribe((result) => {
                this.mainServ.APIServ.uploadImage("files/images/upload", [result], 1).subscribe((data: any) => {
                    this.imageOnLoad = [];
                    countDelete++;
                    if (this.mainServ.APIServ.getErrorCode() == 0)
                        data.forEach(element => {
                            this.images.push(element);
                        });
                    else
                        this.mainServ.globalServ.somthingError()
                });
            });
        });

        // ImageCompressService.filesArrayToCompressedImageSource(files).then(observableImages => {
        //     observableImages.subscribe((image) => {
        //         // images.push(this.dataURLtoFile(image.imageDataUrl,"1"));
        //         images.push(image);
        //     }, (error) => {
        //         console.log("Error while converting");
        //     }, () => {
        //         this.processedImages = images;
        //         this.showTitle = true;
        //         this.ng2ImgMaxService.resize(files, 2000, 1000).subscribe((result) => {
        //             console.log(result);
        //         });
        //         // this.mainServ.APIServ.uploadImage("files/images/upload", images, files.length).subscribe((data: any) => {
        //         //     this.imageOnLoad = [];
        //         //     if (this.mainServ.APIServ.getErrorCode() == 0)
        //         //         data.forEach(element => {
        //         //             this.images.push(element);
        //         //         });
        //         //     else
        //         //         this.mainServ.globalServ.somthingError()
        //         // });
        //     });
        // });
        // ImageCompressService.filesToCompressedImageSource(event.target.files).then(observableImages => {
        //     observableImages.subscribe((image) => {
        //         images.push(image.compressedImage);
        //     }, (error) => {
        //         console.log("Error while converting");
        //     }, () => {
        //         console.log("files");
        //         console.log(event.target.files);
        //         console.log("images");
        //         console.log(images);
        //         this.processedImages = images;
        //         this.mainServ.APIServ.uploadImage("files/images/upload", event.target.files, files.length).subscribe((data: any) => {
        //             this.imageOnLoad = [];

        //             if (this.mainServ.APIServ.getErrorCode() == 0)
        //                 data.forEach(element => {
        //                     this.images.push(element);
        //                 });
        //             else
        //                 this.mainServ.globalServ.somthingError()
        //         });
        //         this.showTitle = true;
        //     });
        // });

    }

    compare(a, b) {
        if (a.priority < b.priority)
            return 1;
        if (a.priority > b.priority)
            return -1;
        return 0;
    }


    changeCategory(categortID) {
        this.search["subCategoryId"];
        this.keyFilter = [];
        if (this.categories.find(x => x.id == categortID).fields)
            this.keyFilter = JSON.parse(JSON.stringify(this.categories.find(x => x.id == categortID).fields));
        this.keyFilter.sort(this.compare);
        this.vetcorKeyFilter = [];
        if (this.keyFilter)
            this.keyFilter.forEach((element, index) => {
                if (element.type == "choose") {
                    var tempValue = [];
                    element.values.forEach(elementValue => {
                        tempValue.push({ value: elementValue.value, fields: elementValue.fields })
                    });
                    this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 })

                }
                else
                    this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id })
                this.search['fields'][index] = {};
            });
        this.subCategories = this.categories.find(x => x.id == categortID).subCategories;

    }

    changeSubCategory(subCategoryID) {
        // if (this.keyFilter)
        //     var lastLength = this.vetcorKeyFilter.length;
        // else {
        //     this.keyFilter = [];
        //     var lastLength = 0;
        // }
        this.keyFilter = [];
        this.changeCategory(this.search["categoryId"]);
        var newFields = this.categories.find(x => x.id == this.search["categoryId"]).subCategories.find(y => y.id == subCategoryID).fields;
        newFields.forEach(element => {
            this.keyFilter.push(element);
        });

        this.vetcorKeyFilter = []
        this.keyFilter.sort(this.compare);

        for (var index = 0; index < this.keyFilter.length; index++) {
            var element = this.keyFilter[index];
            if (element.type == "choose") {
                var tempValue = [];
                element.values.forEach(elementValue => {
                    tempValue.push({ value: elementValue.value, fields: elementValue.fields })
                });
                this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 })
            }
            else
                this.vetcorKeyFilter.push({ type: element.type, key: element.key, _id: element._id })
            this.search['fields'][index] = {};
        };
    }


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

        this.deleteFielde(this.vetcorKeyFilter[indexFields], indexFields);


        var option = field.values.find(x => x.value == value);
        field.lengthChilde = option.fields.length;
        for (var index = option.fields.length; index > 0; index--) {
            var element = option.fields[index - 1];
            if (element.type == "choose") {
                var tempValue = [];
                element.values.forEach(elementValue => {
                    tempValue.push({ value: elementValue.value, fields: elementValue.fields })
                });
                this.vetcorKeyFilter.splice(indexFields + 1, 0, { type: element.type, key: element.key, _id: element._id, values: tempValue, lengthChilde: 0 })

            }
            else
                this.vetcorKeyFilter.splice(indexFields + 1, 0, { type: element.type, key: element.key, _id: element._id })
            this.search["fields"].splice(indexFields + 1, 0, {})
        }

    }

    openSelectImage() {
        document.getElementById('files').click();
    }



    addAdvertising() {
        // this.search['fields'] = [];
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
                // if (element.key == null) {
                this.search['fields'][index].key = element.key;
                this.search['fields'][index].type = element.type;
                this.search['fields'][index]._id = element._id;
                if (element.type == "number" && this.search['fields'][index].value != null) {
                    this.search['fields'][index].value = this.mainServ.globalServ.convertNumber(this.search['fields'][index].value);
                }
                if ((this.search['fields'][index].value == "" || this.search['fields'][index].value == null) && fieldName == "") {
                    fieldName = element.key;
                }
                // }
            });
            this.search['images'] = this.images
            if (this.search['images'].length == 0 && fieldName == "") {
                fieldName = "الصور";
            }
            this.search['ownerId'] = this.mainServ.loginServ.getUserId();
            if (fieldName == "") {
                this.loader = true;
                // this.search['price']="٢٢٢٢"
                // alert(this.search['price']);
                this.search['price'] = this.mainServ.globalServ.convertNumber(this.search['price']);
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
