export default class Render {
    showAreaEffect(areaStyle) {

    }

    removeAreaEffect(areaStyle) {
        
    }

    toggleShowLoginContainer(areaStyle) {
        areaStyle.visibility === 'visible'? 
            areaStyle.visibility = 'hidden' : areaStyle.visibility = 'visible';
            //this.removeAreaEffect(areaStyle) : this.showAreaEffect(areaStyle);
    }
}