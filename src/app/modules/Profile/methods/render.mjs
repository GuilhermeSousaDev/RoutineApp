export default class Render {
    showAreaEffect(areaStyle) {

    }

    removeAreaEffect(areaStyle) {
        
    }

    toggleShowLoginContainer(areaStyle) {
        areaStyle.display === 'block'? 
            this.removeAreaEffect(areaStyle) : this.showAreaEffect(areaStyle);
    }
}