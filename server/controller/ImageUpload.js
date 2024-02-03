import cloudinary from "cloudinary"

cloudinary.config({
    cloud_name:"dzhd0ch3f",
    api_key:"227779778269682",
    api_secret:"xO0YFKfps3o9XM1_XZ1xGO6I82M"
})
const imageUploadController = async (req,res) =>{
    try{
        const result = await cloudinary.uploader.upload(req.files.image.path)
        res.json({
            url:result.secure_url,
            public_id:result.public_id,
        })
    }catch(error){
        console.log(error);
    }
}
export default imageUploadController