//'gif','jpg','jpeg','png','bmp','webp'
//'mp4 ' ,'m3u8','rmvb','avi','swf','3gp','mkv','flv'
//'doc','txt','docx','pdf'
//copy:https://www.jianshu.com/p/8d31a4f3cd85
export default function getMimeTypes(type) {
  let mimeTypes =  `gif&image/gif
#png&image/png  
#jpg&image/jpeg
#jpeg&image/jpeg
#bmp&image/bmp
#mp4&audio/mp4,video/mp4
#m3u&audio/x-mpegurl
#rmvb&audio/x-pn-realaudio
#avi&video/x-msvideo
#swf&application/x-shockwave-flash
#3gp&video/3gpp
#mp3&audio/mpeg
#wav&audio/x-wav
#flac&audio/mpeg
#doc&application/msword,
#docx&application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.wordprocessingml.template,application/vnd.ms-word.document.macroEnabled.12,application/vnd.ms-word.template.macroEnabled.12
#txt&text/plain
#pdf&application/pdf
#xls&application/vnd.ms-excel,application/vnd.ms-excel,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/vnd.ms-excel.sheet.macroEnabled.12,application/vnd.ms-excel.template.macroEnabled.12,application/vnd.ms-excel.addin.macroEnabled.12,application/vnd.ms-excel.sheet.binary.macroEnabled.12
#xlsx&application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
#ppt&application/vnd.ms-powerpoint,application/vnd.ms-powerpoint,application/vnd.ms-powerpoint,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.presentationml.template,application/vnd.ms-powerpoint.addin.macroEnabled.12,application/vnd.ms-powerpoint.presentation.macroEnabled.12,application/vnd.ms-powerpoint.template.macroEnabled.12,application/vnd.ms-powerpoint.slideshow.macroEnabled.12
#mdb&application/vnd.ms-accessapplication/vnd.ms-access
#rar&application/x-rar-compressed
#zip&application/zip, application/x-zip-compressed, multipart/x-zip
#image/*&image/*
#audio/*&audio/*	
`;
  let  mimeTypesAry =  mimeTypes.split('#');
    let ary = mimeTypesAry.filter( item => type.some( items => item.includes(items+"&") ) ) ;
    //s.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');
    let aryAccept = [];
    if(ary.length>0) {
        for(let $ of ary){
            let strs = $.split('&');
            let strss = strs[1].replace(/\ +/g,"").replace(/[\r\n]/g,"")
            aryAccept.push(strss);
        }
    }
    let aryAccepts = aryAccept.join(',');
    console.log(aryAccepts);
    return  aryAccepts
}
