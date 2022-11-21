import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        { _id: 1, Title: "Inception", Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.", ImagePath: "data:image/jpeg;base64,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" },
        { _id: 2, Title: "The Shawshank Redemption", Description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", ImagePath: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJgAmAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAIDBQcEAQj/xABGEAACAQMDAQUEBQUPBAMAAAABAgMABBEFEiExBhMiQVEHFGFxFTKBkaEjscHR0iQzUlRiZHKSorLC4eLw8RZCgpQlQ3P/xAAZAQADAQEBAAAAAAAAAAAAAAAAAgMEAQX/xAAtEQACAgEBBwEIAwEAAAAAAAAAAQIDEQQSEyExMlFSsQUUFSIzQUKRYXGhI//aAAwDAQACEQMRAD8A2yR1ZCqsCSOlRwqUbc4wMedJYihDNtwPSvXYTDanX40AU/abVotNs3uZCTHGvO0ZJJPAHxJ4qjh1vVJIlYWSR7udj3A3D54B5+2uf2js0GltknPfRMCPg4qhstQkaNc/mrZRp1ZDaMmo1G6YR/SGrbs9xB1/jB/ZqSTVNVdCvu8P/sf6aovfW+NL31vjVvdF29TN8RRdx6lqqE/kIcH+cH9mvJdR1Z2yLeD/ANg/s1S++t8aXvrfGj3RdvUPiKL6LU9XIVFtoix4AE5P+Gme+6xHLhreJXU8qbjB/u1xabc38b++WcJfYdudmfs/4rr+kb+UOZLOJQ2dzG3dsfnGanLTpPgv9Kx1iaJp7/Wdg32sQB6E3HB/s1HFqerJn9zwc/zj/TUVxdT2enSWi205DMHklkXAHyAzj76qffW+NNDTKSzj1FnrlB4LmTUdWdie4h5/nB/ZqX6V1Xbt93hxj+Mf6aoffW+NL31vjTe6Lt6ifEUXMeoasrA9xDx/OD+zTp9Z1VI93uiPt52pcDJ+WQOftqk99b41y3uoOsTYyK77ou3qdWvTND7M6zDqVik8bEByfCwwVI4II9QQRVrIrNJuUZB86BPZxunsC4PWeQnPxcn9NHyyBAFb6w6mvPsjsyaR6MXmKY53VkKhgSRilUYjKMHJGBzSpBhCUyEIRweKW3ucsDuJp7xqillHI6c0yNjKdrnIxQAFdvEW6tQsg8PeoCvr4hVNYaRCUBYuF8gGq87cjYkSrwGmTOf6VM0raYVLDjHA8zUbrp1pbLwUhVCfUsnC2kWyqzM0gCjJJfAFc/uFmEz7yuCMjNwOnr8vjRBcJE0ckU43CVWVkB6g8Gq36P05t68BVz+TV84Jzk4/8iKitVa+cmUemq8V+iugs4HmVHIClQzMtypC8ZHGc+ddq6RaNIqLOdxGQomGT8hSe00y1GSkhLgL4SBgDA/wivbUWENyk8CPGY92Bg4Gc8HPkMkAdB91depsX5M4tNU/xX6JDoMQ4VpflvNPi0OMKfHMA3BxIeat7eSOUEhwzkeLac4rqTBBz0H4fCl95tf5M69PUvxX6Bm50m0gSTMpaULu7prkKW++uT3CI7cIucrn92r5jOOvWii+hsyklxcQF94RTgZJCtuA+WTVN9IdnrKeG3cyRS71eMcY3Ku0H+r/ALFaIW2tc2RlTVnpRzJpUbbAsDEtsGPelzk7s4Gf5PHrz6V3xdnrOZA0UruCAcrLkcjP+dewQ6TKBc6fJbv+UEhUzMjBxnB+eSfvq30OG1tomgtoDFjaWXdkfVA4+wffmndlq+7F3NXiv0VJ7M2/rL/XNV2r6DbwWkzHedqMRlz6UcEgnHQVSdpMfR9zgf8A1N+Y1yN89rmDorx0opvZpIY9LXod0rk/1q0BYxJ4ycE84oB9mCLJpQ3jOJnH40eM7I2xeg4q931JCw6UO7zedm3g8daVOaNUXeByBmlUxiJN28bgceeakmxs8HX4V68iupVTyenFMjUxHLjC9PWgAL7ZfvC7uD30eM/0hUWlsVQOiHcRwT6/Cp+3REkcbKeFmTJ+2hfXdZ+jdELLJtll8EfryOSPs/PWXUptpI0UPCYta18F3toHYEnb3g5LH0Hw+NDcl5LaCQC8Mskf/eCdw+bfoqhbUsKWjLNIRgOfL5VDBeKMCQ7v5I6URq2UO55LJe017B3iRu6bgQHB8QJ+NQp2g1XuUK3YiC9AXPJ+X66KOyXZq21wvdX7FU42onFXV17NNL8TQSOCegY0bUOwPKeMg3onbSS3ZXv7gs+cZUcfd+mtM0zUYrjTkvix7lhkBeeen56yHtR2Rm0U99ES0R4OKrY9cv7XRvo+OVxEJCRhjwCMkffzXFXCbTQTlJLBrfaLtZY2cDqLtFlIwEdshPsHU1nd1qS6g37jmeS4L7tyQ8Z8izGhE5f8pIxbPx5qxsl7tQXnaKP0Tr9prS2oohGLkaHplhIoBaaORZOSJGJxnryOlEmiLqGmzsZZzPZsOrPlkPzxzWdWFpaDErmU8BsyyNj48MQKPbWZ5dNMunQ9zcxrujeLhGx5EfVI8uM0m+i+AzpkgvWZZEEi4wRkVU9oD/8AGzk9e7Yfga5Oyd+2oacboqVV5WKoTnZwMj5A5p+vMTZzE8KIzgfYazp4swNj5Tg9m276KTaD++P0/pGtFjK7BuxnHnWfezFwmleI4zM+P61HjoztuUZU816N31GZa+lHi57wZzjPnSqVpEZCink8DilUxhndGPx5zjyr0sJfABivFlaQ7DjBpzqIfEvJPHNAAR27BitQvUmRTn7azbt6zPYWThgF3MCMeo4rR+37b7Bnbqrp0+dZ72itJLzQTs8UsZ70KOp9QPszULWlOOTRTHahLABFs/KpLZd8yp5E1CCMda7rLalv7wo3ZPX0qjeEJCLcsGhdmr5YkCBwgxRrbXwZN0M4cr1XNYgmvCFgltEWmPmwz+FdGndpNS9/iXukTcwG5EKj5nNYXTNZkjc3CWF9zYdThi1PTpk3oCVIyTkCvn/U5ZoZ3tnbEkTFJMDGGU4I/CtKv9J1R9ejsYHHcyBZGDOQrZGfLyoD7XWEtt2u1W2uQU2zFkwPrISNuM/Aiq6ddyNyx8qKVWmlbAZifnVhDcm2RQVMkvlk8CmWloyTglgykHlf011tbjKuyERhvEc8sPh6VeTT4CVwaWSx0nUAxxcSqjhvCEUZ+/FW7awbSZNuoXMJwCzxtg/acGhWHT4551kjaRYyxwSfKjq57OK9uur6dfxW4mTuZRNyGyMFfhmss9lT5mtNuHFBp2Rnhk0QPb3HeqZXJk/hEnJJp+uzObO4IPHdt9vFcOiXDR2q2s0ESsiZLwnwyHNTasQLG5JOW7s5+6pxf/REpRwmT+zRDJpSkHGJXH9qtAEnd4THTjNZ/wCzRzHpKY85XP8AarQRGrjec5PNevd1s82HShvdbPHnOOaVISM52HGDxSqYxI6KqEqACB1qOIl3IkOR8RXiI6sCwwvnT5SHXahy3woABfaOAunsF4UsM4+dBdo6led27bgLRn7Qcppcofg71wD86zaW6fhF5boeef8AZ/NWTVrKRu0XNlH2ikklu2t7lI+7dsJJHGFK+nI8vhTNOheziEcpVgSeAKupovedzMu44xjAOfvofE3cMyFs7DgZ9KWEnKOC1kVXPaCbStL069kwo7qc9WAHNWmr6RbaZDCJGRpZm27nOAB60LaVqIjYHOD6iri/162mtpLXUIjO0nABG7FQkp5wVyuqIZ9mu02j6j7tYO+buJe7WXgg48ga4e23Zptc1p+6iJuUiUJIqZHT6rH0zz8OKpexdxb6a8jWmnXLbkKkFVAYevJznyot1HXNWsxJcW0FxNaxwB0iNozbpCMABh15PPXgVSCy8J8jPZ8jzjmZOthLptxNaXsbQ3CnlHHiB9P864biU28wk7w9cbQaMLu+vr/Sb/V+00Hdgx7UJXYzNngANzjPxoL1Axy/lRj6uDj1rSo8eJPbyidLyUSmXue9wuFUdKKeyF5ql0DZpLFBDIpL96N2V8wo9fnQFBJIFJGMD+ETzV5ol6yTxA3TLzjbAu1vlmp2VrBSFjlwD7slZzwT6lHJJ3zWaAoMcspPJx8Oh+dXWrcadPjqUYkn4iqLsZK1p2jmux3vdwwbPES2TI2cHPwUffRR2mtEmspri0YdxsYvGOobHOKmqm2pIWdnFpnvsvCvpQDjOJn6/Ojt2ZXKqTt9BQB7NlL6Um0dJHzj+ka0RGVUCuRuxyK9O7rZ50OlCZFCFgADjOaVRKjhwWB255+VKpjEhlWQbFzk9M14imHLPg8eVIxd3485284xS3d/4MbfPPWgAE9pL79LkcdEI+HnWXafa3Wo3Yis43klY9F6KPUnyFan7Qol9xMDklZZEViOMAsBVPbXVnpOkulnGlvFtyxHVj6nzJqF6TSNOns2M4KKCa2ji1KztArLDE1tLcEcvKRkhfRVA+3IrONV3K5blWP1gOMHzouh1CG2hmji8G6ZmZjzvJ8/zUI6numO6VsOD1Pn867CKXIJyb5nHFeSJwD9tXml6pbOFS7lK+pxk0OMpVsYwa7tMshPJmUgIvLH0HnTTgpLiFdkovgaP2ZfQEvY2gkuZJ2OEy/5hRhova+S1R7XV44LY2/hGx9xYDoSBmgdNPGldmtN7Q2MCo9pOxuVC/vlu55B9ccV0DULfS9WDufdmfneF/I3kJ6bgBw2D1rMo7HFMpKW85mgT6tofaOOSxvrGO6h2GTZcxjxAeaefH2UF9pPZgktsZ+zEhdFGVtJm8WOoCt59eh++pdRjFjd2V/ZEe7khwB5KeoFGFlqsQIbce62sjH0ZfX7KdW56ibhs9J8/XttJpc7W2oWssFwvWORCp/4+NO0/VorJt3dRHz5QE1vutWNt2n0dTcWUU5xxFNwfkrjlT6EVks3YFlv2n0+ZprBW2tHKMTQtnG2QfiD51XMWcUpLkE/Ze6lttFku5wvf3cveKpAOCRgD7gK7Lu+nSCSOGFnhSIqTnPj53evr+FcDI0Iz0t7RDtUeeBk/mqvtmlt7SWQMyb4zuVQPyjsOcj5nrRHnwFfcPPZi4j0obgeZXP40emNpCXXGD60A+zJO80pecYlcfjR/wB73fg25xxnNabvqSM8OlHpkDrsGcnjpSrzutnjznHOMUqmMNWRnYK3INPkUQruTg9Kc+3Ydu3d5YqKH653Zx5ZoAA/aRIRpMkp5KOhz/5Cs4e+aeFYzkheT4uP860T2rYGizEHGCuf6wrHxcnbtBwfKo3LODVpcZeTqv4kaPZHy7jxHHCj4fGqxtLvZFG2GZ42cRpKIyQzYztz/CxVhDImABkgDj40SaTPY2kem3GplP3Pd5gwkmUU/XBwMY4Vhgk5z5ZqUJ/YvbUsZQCLplwYu87otFuC5xwCeg/A12PpktvamRIZQVILxlTtAP1ST6EdPWivRJrJrRbK808WuJ45jbRtOzTKsUnhBJJ6lVGCOvmKu7e9tdYWVdWtikzIY7i3iDkuoIkT1IwRt+AYDyqjn/JFQ/gb2d1RNY0ebS7q1aGRrcpJEFJBVhjPPlgg4+IqC0gsR2fNlqZeZbSY2wleExsCOQCDyDj89Tx30jKLxiE1aSdITJghBGrd4hOPQ7Vx6IK6LGOwXT7i2iiWSCSdnK7pCBuVM4PHAbcAepAz55qLcccBlGWeRUaXFOlveaRLvb3di8GRghfQ/fU1peXVtK9pKoMVwFk3Hybofs4oie5t7K8mmigE3vkhMkmWUd2OAo9fM/YKjvZLaSKCwcmaBN5G1DvB3cMOPTqOlLwOvPYsdNvO5WWN2Z2RhtBGOvkPw++oryFnn+lbONUmA2XEWcidPT5j1p8ElvL3oEhAkmZluEQgkFYwOMZ8W09OfD6ZrojaGKMLjdkYVV8h6V2UlERJsp9Rgtl0/vLbe0VwQuCenOSPuGKG5JUuBcTFcRIjiMY/GjOWBNkkZUCKU8KP+0+tUGq2ixWkoQYUIePU12u1bSCUOBeezZ2TSk245lc/2jWhIiyKHI5I60Aey7b9FeLr3z4z86O23d4dvTPFejd1sxQ6UeiRmcISME46UqlYDYcY3YpVMYiWNkYMwwBT5SJl2pyaRl7wbMYzxmvAvc+MnPFAGd+1QbOzt0rcE7ePtFYe8pGRnrW4e1lu87PXLYxt2j+0KwmU0si1Lxk7Le4CnLHIHQVZrq0s9pHYSMGijcuBjnJHPPpQ6rc/CpVlbOB0xUXA1xs7hdHq8r3nvjd2ZxxkjAPGOmfQ12Q6q8c891uUySpsfcMALwMfgKEIpGAByQah1W7f3YR5+scH5VHdtvBV2RjHODQNL1O6VGNiUkTaXZoyHKkcc46Ec4+Z9a77C4IgfDgRuwYgY6jOPs5NZp2S1SXTtZtT37CAyjeucD4EnyGcZPpWk64yJqbzW8aC1dFkQQ42nPX8c5/zqN1bhwO1TVnHB1F1lhjQ4JQ8fDz/AM6ep3yO7lXLsrbWGFypyPP4mqZbh8gDxZOD86ebmTPDdepH6PwrPmSLOCCC1vZYZXdZsksGIxkZH/JqaG4RAF3bnAwPhQ7HKYtpZjyOmaet8A3XgnJJ44ru0xd0gmN6oXzLeVVeqybrKYH+A32VxR325gd458j1+7/fnXPqN2TbzKOfCRmnqb20SsrxFhV7NkaTS0C4OJX/ALxrQ0dUQKTyB0rPvZk/d6UvGcyufxo/7rvPHnGecV7t31Jf2ePDpQwRsrhyvAOetKpDKH8GMZ4zSqQwjEsY3gnI9a8VjNlXwOPKmI7swVjkHrUkoCLuThqAM69rS932eulHIbb/AHhWEzeeK3n2pI0vZ26J5wU5x08QrJIuz0lwgZZ4lyPPNUjTOxZijm+hX1MGhnzzUsfDYPr99EY7KyjpcxZ+RpDsrNnJniPp1oekt8Rlrae5TwsMgH15qG/290Wbgk+H50Rf9NzAECaE5+YqGXsvdSsC1xBgDA5PFItJannZHlrqXHGQQwfIGrTSNb1DTJ4XhuJWiRxmFyXQrnkbTxgj/Yq5/wCk5v4zB+NeHsnN5XEH41R6WxrjEhHV1p8JF+uqWWpg3FoY4m2B5bZT9Q9Dj+T+Izini5TZxkOemfz1SWOgX9heR3FvNASp8Q3cMvmCPMGrq4sMzd5byLtJzh+CPQVis9m3Z+WJ6FXtOnGJSPWnUkDd82NN94AyQASOmfKovo64Zy3eRYPxP6qcNNuAc95D09T+qk+GajxKfFNL5epKJxGneFhuYnyyfLp+umXVzmKQHHKkADypo064zzND8sn9VQXVpLFGxaSLp6k09fs69SzsiT9paeUcKRpPsxQSaUNxPErjj50fGVo8ouCB61n3sx3/AELE44DSOfn4j+qtERVZAzjxY5NbbvqP+zz4dKPDGEG8ZJHNKo1dy4Vjlc4PFKpDEzurIQpBOOgNRxAoxMgwPUmlSoA4dasItRt3idA8bIVcEcEUHr7O9Mj+r30f8kTtx+Ne0qeNk4dLOOKfNHPJ2A8Z7uaQJ5bmc/ppN2ByMRXIZvTL/tV7Sru/s8mc3cOx7B2AC595lb4Ydx/ip7dgICTtaZh8JW/XSpUb+zyObuHY9Hs/stviaQN/+zfrrxewFuDlu/C+vet+ulSo31nkG7h2Hv2Cssfk2uGPoJ2pL2Bs+e8M49MzsP017Sru+s7hu4diNuwMG8mN7kp5ASH89Tf9CWOMb593p37V5Srm/s8mG7h2Gr2Dtsjf7wB6963669f2e6dKRuWaQeY79/10qVG/s8mG7h2C/RdOg0y0SCONYVThEAwABXXIGZyVB2+o6UqVTy3xY5MzIUIBBOKVKlQB/9k=" },
        { _id: 3, Title: "Gladiator", Description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.", ImagePath: "data:image/jpeg;base64,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" }
      ],
      selectedMovie: null
    }
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
          ))
        }
      </div>
    );
  }
}

export default MainView;