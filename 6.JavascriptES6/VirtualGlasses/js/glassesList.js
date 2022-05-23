export class GlassesList{
    constructor() {
        this.glist=[];
    }
    addGlasses(glasses){
        this.glist.push(glasses)
    }
    renderGlasses(){
        //Chua cac the HTMLchua noidung cua cac doi tuongkinh
        let content = "";
        //Dùng reduce không dùng map vì reduce có hỗ trợ lệnh return hơn map
        content = this.glist.reduce((glcontent,item,index)=>{
            glcontent += `
                <div class ="col-4">
                    <img class="img-fluid vglasses__items" onclick="tryOnGlasses(event)" data-id="${item.id}" src="${item.src}" alt="Glasses">
                </div>
            `;
            return glcontent;
        },'')
        return content;
    }
}