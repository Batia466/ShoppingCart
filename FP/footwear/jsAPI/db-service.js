
class dbService {
    _baseUrl = "http://localhost:3500"
    async getData(url) {
        const res = await fetch(this._baseUrl + url);
        if(!res.ok) {
            throw new Error("can`t do it");
        }
        return await res.json();
    }
    getItems(){
        return this.getData("/all_items/")
    }
}
export { dbService };