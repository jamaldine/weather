export class MeteoService {
  title="MetoService";
  api_weathers=[
    {
      'id':1,
      'city':'FES',
  	  'days':[
        {'number':1,'day':'Monday', 'pronostic':25,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/01.svg'},
  	    {'number':2,'day':'Tuesday', 'pronostic':40,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/02.svg'},
  	    {'number':3,'day':'Wednesday', 'pronostic':21,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/03.svg'},
  	    {'number':4,'day':'Thursday', 'pronostic':36,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/04.svg'},
  	    {'number':5,'day':'Friday', 'pronostic':28,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/05.svg'},
  	    {'number':6,'day':'Saturday', 'pronostic':16,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/06.svg'},
  	    {'number':7,'day':'Sunday', 'pronostic':33,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/07.svg'}
      ]
    },

    {
      'id':2,
      'city':'RABAT',
      'days':[
        {'number':1,'day':'Monday', 'pronostic':25,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/07.svg'},
        {'number':2,'day':'Tuesday', 'pronostic':40,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/06.svg'},
        {'number':3,'day':'Wednesday', 'pronostic':21,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/05.svg'},
        {'number':4,'day':'Thursday', 'pronostic':36,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/04.svg'},
        {'number':5,'day':'Friday', 'pronostic':28,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/03.svg'},
        {'number':6,'day':'Saturday', 'pronostic':41,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/02.svg'},
        {'number':7,'day':'Sunday', 'pronostic':13,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/01.svg'}
      ]
    },
    {
      'id':3,
      'city':'CASA',
      'days':[
        {'number':1,'day':'Monday', 'pronostic':25,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/05.svg'},
        {'number':2,'day':'Tuesday', 'pronostic':40,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/01.svg'},
        {'number':3,'day':'Wednesday', 'pronostic':21,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/06.svg'},
        {'number':4,'day':'Thursday', 'pronostic':36,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/03.svg'},
        {'number':5,'day':'Friday', 'pronostic':28,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/02.svg'},
        {'number':6,'day':'Saturday', 'pronostic':24,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/07.svg'},
        {'number':7,'day':'Sunday', 'pronostic':37,'img':'https://vortex.accuweather.com/adc2010/images/slate/icons/04.svg'}
      ]
    }
  ]
  getAppareilById(id: number) {
    const appareil = this.api_weathers.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
}
}