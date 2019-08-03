export class BlogPostBlurbPrettifierValueConverter {
    toView(blurb) {
        // for now, prettifying will be removing the last character (which could be a punctuation) and adding ellipses
        return `${blurb.slice(0, -1)}...`;;
    }
}