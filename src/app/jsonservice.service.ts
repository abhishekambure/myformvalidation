import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {

  constructor() { }


  Api=[
    {
      Name:"Insideous",
      details:"Insidious is a 2010 American supernatural horror film directed by James Wan, written by Leigh Whannell, and starring Patrick Wilson, Rose Byrne, and Barbara Hershey. It is the first installment in the Insidious franchise, and the third in terms of the series' in-story chronology. The story centers on a couple whose son inexplicably enters a comatose state and becomes a vessel for a variety of malevolent entities in an astral plane."
  },{
    Name:"IT",
    details:"It, titled on-screen as It: Chapter One, is a 2017 American coming-of-age supernatural horror film based on Stephen King's 1986 novel of the same name. The film was produced by New Line Cinema, RatPac Entertainment, KatzSmith Productions, Lin Pictures, and Vertigo Entertainment.[6][7] It is the first film in the It film series as well as being the second adaptation following Tommy Lee Wallace's 1990 miniseries.[8][9][10] It tells the story of seven children in Derry, Maine who are terrorized by the eponymous being, only to face their own personal demons in the process. The film is also known as It: Part The Losers' Club."
  },{
    Name:"The exorcist",
    details:"The Exorcist is a 1973 American supernatural horror film directed by William Friedkin and written for the screen by William Peter Blatty, based on his 1971 novel of the same name. The film stars Ellen Burstyn, Max von Sydow, Lee J. Cobb, Kitty Winn, Jack MacGowran (in his final film role), Jason Miller and Linda Blair. It is the first installment in The Exorcist film series, and follows the demonic possession of a young girl and her mother's attempt to rescue her through an exorcism conducted by a pair of Catholic priests."
  },
  {
    Name:"SAW",
    details:"Saw is a 2004 American horror film directed by James Wan, in his feature directorial debut, and written by Leigh Whannell from a story by Wan and Whannell. It is the first installment in the Saw film series, and stars Whannell, Cary Elwes, Danny Glover, Monica Potter, Michael Emerson, Ken Leung, and Tobin Bell. The film tells a nonlinear narrative, revolving around the mystery of the Jigsaw Killer, who tests his victims' will to live by putting them through deadly where they must inflict great physical pain upon themselves to survive. The frame story follows Jigsaw's latest victims (Whannell and Elwes), who awaken in a large dilapidated bathroom, with one being ordered to kill the other to save his own family"
  }
  ]
}
