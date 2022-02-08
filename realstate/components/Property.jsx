import Link from "next/link";
import Image from 'next/image';
import {Box, Flex, Text, Avatar } from '@chakra-ui/react';
import {FaBed, FaBath } from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from "../assets/house.jpg"


const Property = ({ property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerfied, externalID}}) =>
(
    <Link href={`/property/${externalID}`}passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="house"/>
            </Box>
            <Box w="full">
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Box paddingRight="3" color="green.400">{isVerfied && <GoVerified/>}</Box>
                        <Text frontWeight="bold" fontsize="lg">USD{millify(price)}{rentFrequency && `/$(rentFrequency)`}</Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    </Link>
);