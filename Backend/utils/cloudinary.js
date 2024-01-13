import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
  cloud_name: "djisd33td", 
  api_key: "581431244242233", 
  api_secret: "n2aqx3JfYJnBhZLcAsgEvC0iR4g"
});

const uploadOnCloudinary = async(localFilePath) => {
    try {
        if (!localFilePath) return null

        // upload the file on cloudinary 
        const response = await cloudinary.uploader.upload(localFilePath , {
            resource_type : "auto"
        })

        // file has been uploaded successfully
        console.log("File is uploaded on cloudinary: " , response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null
    }

}

export {uploadOnCloudinary}
          

