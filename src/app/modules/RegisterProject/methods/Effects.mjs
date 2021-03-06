export default class Effects {
    #removeAreaEffect(areaStyle) {
        areaStyle.top = '800px';
        setTimeout(() => areaStyle.display = 'none', 1000);
    }

    #showAreaEffect(areaStyle) {
        areaStyle.display = 'block';
        setTimeout(() => areaStyle.top = '180px', 100);
    }

    toggleShowRegisterProjectNameArea(areaStyle) {
        areaStyle.display === 'block'? 
            this.#removeAreaEffect(areaStyle) : this.#showAreaEffect(areaStyle);
    }
}