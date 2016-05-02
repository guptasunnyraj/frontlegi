var app = angular.module('profile',[]);


var data = {};

  app.controller('ProfileController',function(){
    //this.products=gems;
    //this.product=gem;
    
   console.log(data);
    

  });
  


  app.controller('ReviewPanelController',function(){
    this.tab=1;
    this.selectTab=function(setTab){
      this.tab=setTab;
    };
    this.isSelected=function(checkTab){
      return this.tab===checkTab;
    };
    this.writeflag=false;
    this.profileflag=false;
    this.changeflag=function(){
    	if(this.writeflag)
    		this.writeflag=false;
    	else
    		this.writeflag=true;    		
    };

    //this.review={};
    /*this.reviews=[{
          stars:5,
          body:"dfklskfldkl",
          author:"abc@gmail.com"
        }];
    this.addReview=function(product){
      product.reviews.push(this.review);
      this.review={};
    };*/
    
	
    this.review={};
    this.file;

    this.education=[{"college":"","degree":"","year":""}];
    this.court=[{"court":""}];
    this.exp=[{"job":"","company":"","from":"","to":""}];
    this.honors=[{"name":"","granted":"","year":""}];
    this.pub=[{"title":"","year":""}];
    
    this.rev=[{"name":"Sharad","stars":4,"subject":"lorel ipsum"},{"name":"Sharad N Darji","stars":3,"subject":"lorel ipsum dskjdls dskjds kdjsld djskldn djskld"}]
    this.revv={};
    this.review['rev']=(this.rev);

    this.getNumber = function(num) {
    	return new Array(num);   
	};
    this.getGender=function(){
    	if (this.review.genderm=="M") {
    		return "Male";
    	} else {
    		return "Female";
    	}
    };
    this.addReview=function(product){
      this.rev.push(this.revv);
      this.revv={};
    };
    this.addeducation=function(){
		this.education.push([{"college":"","degree":"","year":""}]);
		this.ff=1;
	};
	
	this.addhonors=function(pro){
		
		this.honors.push([{"name":"","granted":"","year":""}]);
	};
	
	this.addexp=function(pro){
		this.exp.push([{"job":"","company":"","from":"","to":""}]);
	};
	
	this.addpub=function(pro){
		this.pub.push([{"title":"","year":""}]);
	};
	
	this.addcourt=function(pro){
		this.court.push([{"court":""}]);
	};
	
	this.upload = function(){
		console.log(this.file);
		console.dir(this.file);
		console.log(btoa(this.file));
		console.log($('#file').val());
	};
	
	this.addFinal=function(){
		this.review['education']=(this.education);
		this.review['exp']=(this.exp);
		this.review['pub']=(this.pub);
		this.review['honors']=(this.honors);
		this.review['court']=(this.court);
		data = this.review;
		this.profileflag=true;
		console.log(this.review);
	};

	this.check = function(from,to){
		var len = this.exp.length-1;
		if(this.exp[len].from > this.exp[len].to){
			alert("from should be less than to");
			this.exp[len].to = "";
		}

	};
	
  });


// app.directive('fileModel', ['$parse', function ($parse) {
//     return {
//         restrict: 'A',
//         link: function(scope, element, attrs) {
//             var model = $parse(attrs.fileModel);
//             var modelSetter = model.assign;
            
//             element.bind('change', function(){
//                 scope.$apply(function(){
//                     modelSetter(scope, element[0].files[0]);
//                 });
//             });
//         }
//     };
// }]);

// app.service('fileUpload', ['$http', function ($http) {
//     this.uploadFileToUrl = function(file, uploadUrl){
//         var fd = new FormData();
//         fd.append('file', file);
//         $http.post(uploadUrl, fd, {
//             transformRequest: angular.identity,
//             headers: {'Content-Type': undefined}
//         })
//         .success(function(){
//         })
//         .error(function(){
//         });
//     }
// }]);