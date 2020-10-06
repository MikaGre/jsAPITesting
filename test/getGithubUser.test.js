const gitApi = require('../src/apiLayer')
const { expect } = require('chai');


describe('GET - Github User profile information', () => {
    let api;

    before( async () => {
        api = new gitApi();
    });
    
    
    it('User:MikaGre info', async () => {
        const response = await api.getUserInformation();
        console.log(response);
    });

    it('User:MikaGre - Verify UserName', async () => {
        const response = await api.getUserInformation();
        expect(response.login, "User name is incorrect").to.equal("MikaGre")
    });

    it('User:MikaGre - Verify ID', async () => {
        const response = await api.getUserInformation();
        expect(response.id, "ID is incorrect").to.equal("61209775")
    });

    it('User:MikaGre - Verify user type', async () => {
        const response = await api.getUserInformation();
        expect(response.type, "Type is incorrect").to.equal("User")
    });

    it('User:MikaGre - Verify property', async () => {
        const response = await api.getUserInformation();
        expect(response).to.have.property("name", name)
    });


});