export class AnimeInfo {
    public title:string = "";
    public image_url:string = "";
    public synopsis:string="";
    public episodes:number;
    public start_date:string="";
    public end_date:string="";
    public score:number;

    constructor(p_title:string, p_image_url:string, p_synopsis:string, p_episodes:number, p_start_date:string, p_en_date:string, p_score:number){
        this.title = p_title;
        this.image_url = p_image_url;
        this.synopsis = p_synopsis;
        this.episodes = p_episodes;
        this.start_date = p_start_date;
        this.end_date = p_en_date;
        this.title = p_title;
        this.title = p_title;
    }
}
