import React from 'react';
import { Helmet } from 'react-helmet-async';


//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PzSvUX3l5eRRdjOCnBDJctL8Lx7bxGJRd6t6e794&s
/*<meta property="og:title" content="National Geographic: Stories of Animals, Nature, and Culture">
<meta property="og:image" content="https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/homepage/nationalgeographicog.ngsversion.1530540626597.adapt.1900.1.jpg">
<meta property="description" content="Explore National Geographic. A world leader in geography, cartography and exploration.">
<meta property="og:url" content="https://www.nationalgeographic.com"></meta>*/

export default function SEO({title, description, name, type}) {



return (



<Helmet>
{ /* Standard metadata tags */ }
<title>{title}</title>
<meta name='description' content={description} />
{ /* End standard metadata tags */ }
{ /* Facebook tags */ }
<meta property="og:type" content={type} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PzSvUX3l5eRRdjOCnBDJctL8Lx7bxGJRd6t6e794&s'/>
{ /* End Facebook tags */ }
{ /* Twitter tags */ }
<meta name="twitter:creator" content={name} />
<meta name="twitter:card" content={type} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:site" content="@ResearchEden" />
<meta name="twitter:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PzSvUX3l5eRRdjOCnBDJctL8Lx7bxGJRd6t6e794&s"/>
{ /* End Twitter tags */ }
</Helmet>
)
}