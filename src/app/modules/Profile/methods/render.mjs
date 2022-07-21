export default class Render {
    showAreaEffect(areaStyle) {
        areaStyle.visibility = 'visible';
        setTimeout(() => areaStyle.top = '10%', 100);
    }

    removeAreaEffect(areaStyle) {
        areaStyle.top = '-80%';
        setTimeout(() => areaStyle.visibility = 'hidden', 200);
    }

    toggleShowLoginContainer(areaStyle) {
        areaStyle.visibility === 'visible'? 
            this.removeAreaEffect(areaStyle) : this.showAreaEffect(areaStyle);
    }
}