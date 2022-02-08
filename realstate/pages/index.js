import Link from 'next/link'
import Image from 'next/image'
import {Flex, Box, Text, Button} from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';

import Property from '../components/Property';

const Banner = ({purpose,title1,title2,desc1,desc2,linkName,buttonText,imageUrl}) => (
  <Flex flexWrap= "wrap" justifycontent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
      <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3">{desc1} <br/> {desc2}</Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)


export default function Home({propertiesForSale, propertiesForRent}) {
  return (
    <div>
      <Box>
     <Banner
        purpose="RENT A HOME"
        title1="Rent homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        linkName="/search?purpose=for-rent"
        buttonText="Explore Renting"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
     />
    <Flex flexWrap="wrap">
      {propertiesForRent.map((property) => <Property property={property} key={property.id}/>)}
    </Flex>
    <Banner
        purpose="BUY A HOME"
        title1="Find, Buy and Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        linkName="/search?purpose=for-sale"
        buttonText="Explore Buying"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
     />
      {propertiesForSale.map((property) => <Property property={property} key={property.id}/>)}
  
     </Box>
    </div>
  )
}

export async function getsaticProps () {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return{
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  }

}