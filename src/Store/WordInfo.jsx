import { makeAutoObservable } from "mobx";

class WordInfo {
    currentsKey = []
    mistakesKey = []
    constructor () {
        makeAutoObservable(this)
    }
    addCurrentKey(item) {
        this.currentsKey.push(item)
    }
    addMistakeKey(item) {
        this.mistakesKey.push(item)
    }
    removeAll(){
        this.currentsKey = []
        this.mistakesKey = []
    }
}

export default new WordInfo()