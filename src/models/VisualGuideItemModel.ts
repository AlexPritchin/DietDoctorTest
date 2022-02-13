class VisualGuideItem {
    title: string;
    imageURL: string;
    backgroundColor: string;

    constructor(title: string, imageURL: string, backgroundColor: string) {
        this.title = title;
        this.imageURL = imageURL;
        this.backgroundColor = backgroundColor;
    }
}

export default VisualGuideItem;