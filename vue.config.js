module.exports ={
    devServer:{
        proxy:{
            "/wy":{
                "target":"http://10.9.26.188:3000",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/wy":"/"
                }
            }
        }
    },
}