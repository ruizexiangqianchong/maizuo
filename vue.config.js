module.exports ={
    devServer:{
        proxy:{
            "/wy":{
                "target":"http://10.9.26.199:3000",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/wy":""
                }
            }
        }
    },
}