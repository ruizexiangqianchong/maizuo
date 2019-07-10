module.exports ={
    devServer:{
        proxy:{
            '/dl':{
                "target":"https://m.maizuo.com",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/dl":""
                }
            }
        }
    }
}