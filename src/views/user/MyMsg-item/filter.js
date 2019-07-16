import Vue from 'vue'

Vue.filter("formatYear",(value)=>{
	let d= new Date(value)
	return d.getFullYear()===2019 ? "":d.getFullYear()+"年"
})
Vue.filter("formatMonth",(value)=>{
	let d= new Date(value)
	return (d.getMonth()+1)+"月"
})
Vue.filter("formatYearDate",(value)=>{
	let d= new Date(value)
	return d.getDate()+"日"
})

