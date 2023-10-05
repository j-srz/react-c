

export const fileUpload = async( file ) => {
    
    if ( !file ) throw new Error('Ningun archivo a subir');
    
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dm94r4ta6/upload';
    const formdata = new FormData();

    formdata.append('upload_preset', 'react-journal');
    formdata.append('file', file)



    try {

        const resp = await fetch ( cloudUrl, {
            method: 'POST',
            body: formdata,
        });

        if (!resp.ok) throw new Error('No se pudo subir la imagen');
        
        const cloudResp = await resp.json();
        return cloudResp.secure_url;


    } catch (error) {
        console.log(error);
        throw new Error(error.message)
        
    }

}