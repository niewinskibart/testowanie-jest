import {Doorman} from "./doorman"




describe('Doorman', () => {
    let doorman;
  
    beforeEach(function () {
        doorman = new Doorman();
    });
  
    it('greets a person correctly', () => {
      const greeting = doorman.greet('Alice');
      expect(greeting).toEqual('Hello Alice!');
    });
  
    it('expetion when no one has been met', () => {
      const report = doorman.tellMeWhomYouMet();
      expect(report).toEqual("I've met nobody.");
    });
  
    it('expetion when one person has been met', () => {
      doorman.greet('Alice');
      const report = doorman.tellMeWhomYouMet();
      expect(report).toEqual("I've met Alice.");
    });
  
    it('expetion when two people have been met', () => {
      doorman.greet('Alice');
      doorman.greet('Bob');
      const report = doorman.tellMeWhomYouMet();
      expect(report).toEqual("I've met Alice and Bob.");
    });
  
    it('expetion when three or more people have been met', () => {
      doorman.greet('Alice');
      doorman.greet('Bob');
      doorman.greet('Charlie');
      const report = doorman.tellMeWhomYouMet();
      expect(report).toEqual("I've met Alice, Bob and Charlie.");
    });
  });