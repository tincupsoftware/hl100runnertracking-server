exports.seed = function (knex, Promise) {
  return knex('runnertracking').del()
    .then(() =>
      knex('runnertracking').insert([
        {
          bibNumber: 1,
          firstName: 'Caleb'
    lastName: 'Efta',
          shirtSize: 'Men/s Large',
          locationStaying: 'Camping at start/finish',
          shoeBath: 'Yes, at runner checkin',
          medicalCondition: 'Type I Diabetes',
          medication: 'Sthyroid',
          Started: false,
          RasberryOneIn: '00:00:00',
          RasberryOneOut: '00:00:00',
          AnteroIn: '00:00:00',
          AnteroOut: '00:00:00',
          StElmoOneIn: '00:00:00',
          StElmoOneOut: '00:00:00',
          CottonwoodIn: '00:00:00',
          CottonwoodOut: '00:00:00',
          StElmoTwoIn: '00:00:00',
          StElmoTwoOut: '00:00:00',
          HancockIn: '00:00:00',
          HancockOut: '00:00:00',
          HancockPacerIn: false,
          HancockPacerOut: false,
          LostWonderIn: '00:00:00',
          LostWonderOut: '00:00:00',
          LostWonderPacerIn: false,
          LostWonderPacerOut: false,
          PurgatoryIn: '00:00:00',
          PurgatoryOut: '00:00:00',
          PurgatoryPacerIn: false,
          PurgatoryPacerOut: false,
          MonarchIn: '00:00:00',
          MonarchOut: '00:00:00',
          MonarchPacerIn: false,
          MonarchPacerOut: false,
          FoosesIn: '00:00:00',
          FoosesOut: '00:00:00',
          FoosesPacerIn: false,
          FoosesPacerOut: false,
          BlanksIn: '00:00:00',
          BlanksOut: '00:00:00',
          BlanksPacerIn: false,
          BlanksPacerOut: false,
          RasberryTwoIn: '00:00:00',
          RasberryTwoOut: '00:00:00',
          RasberryTwoPacerIn: false,
          RasberryTwoPacerOut: false,
          Finish: '00:00:00',
        },

      ]))
    .then(() => knex.raw('ALTER SEQUENCE runnertracking_id_seq RESTART WITH 10;'));
};