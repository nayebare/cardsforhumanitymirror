const mongoose = require("mongoose");
const app = require("../server");
const User = mongoose.model("User");
const Article = mongoose.model("Article");
const should = require('should');


var user;

describe("Method Save", function() {
  describe("Model User:", function() {
    it("should be able to save a user without problems", async () => {
      await new User({
        name: "Full name",
        email: "test@test.com",
        password: "password",
        username: "tehdydkd"
      }).save();
    });

    it("should be able to save an article without problems", async () => {
        await new Article({
            title: 'Article Title',
            content: 'Article Content',
        }).save();
      });

      
      it('should be able to show an error when trying to save without an article title', async(done) => {
        await new Article({
            title: '', 
            content: 'Article Content',
        }).save(function(err) {
          should.exist(err)
          done();
      });
    });


    it('should be able to show an error when try to save with email not properly formed', async(done) => { 
      await new User({
        name: "Full name",
        email: "test-test.com",
        password: "password",
        username: "tehdydkd"
      }).save(function(err){
        should.exist(err);
        done();
      })
  });
  });
});
