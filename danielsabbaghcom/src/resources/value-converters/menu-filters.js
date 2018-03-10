export class MenuFiltersValueConverter {
    toView(obj, convertThese) {

        if (!convertThese) {
            return obj;
        }
        
        if (obj == "Blog") {
            return "Blawg";
        } else if (obj == "About") {
            return "'Bout Me";
        } else if (obj == "Talks") {
            return "talkz I did";
        }
        
        return obj;
    }
}