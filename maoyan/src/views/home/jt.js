import Vue from 'vue'
		Vue.directive("scroll",(el)=>{
			el.addEventListener("scroll",()=>{
				console.log(el.scrollTop)
			})
		})
		