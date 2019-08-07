export class BlogPostBlurbPrettifierValueConverter {
    toView(blurb) {
        // prettifying includes two things:
        // 1 - removing any markdown inside the blurb
        // remove all of #, !, *
        blurb = blurb.replace(/[\#|\!\*]/g, '');
        
        // we'll also need to remove [][] and [](), as well as their contents
        let matches = blurb.match(/(\[.*\])/g);
        if (matches != null) {
            matches.forEach(element => {
                blurb = blurb.replace(element, '');
            });
        }

        // 2 - trimm the last character in case its a markdown character,
        // and add ellipses
        return `${blurb.slice(0, -1)}...`;;
    }
}