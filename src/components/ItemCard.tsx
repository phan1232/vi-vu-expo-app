import { StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Box, HStack, Text, VStack, useTheme } from "native-base";

import { Location, Star1 } from "iconsax-react-native";
import { IRestaurant } from "../type/restaurant";
import { RootState, useAppSelector } from "../store";

import { useNavigation } from "@react-navigation/native";
import { haversineDistance } from "../utils/utils";
import { DistrictName } from "../data/utils";

type Props = {
  restaurant: IRestaurant;
};

const ItemCard = (props: Props) => {
  const { restaurant } = props;
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  const location = useAppSelector(
    (state: RootState) => state.location.location
  );
  const distanceUser = haversineDistance(
    restaurant.lat,
    restaurant.lng,
    location?.lat!,
    location?.lng!
  );

  const handleRestaurantDetail = () => {
    navigation.navigate("Restaurant", {
      id: restaurant.id!,
    });
  };
  return (
    <TouchableOpacity onPress={handleRestaurantDetail}>
      <Box p={3} bgColor={"coolGray.100"} borderRadius={16}>
        <HStack space={4} alignItems={"center"}>
          <Box>
            <Image
              source={{ uri: restaurant.image }}
              style={{ width: 120, height: 80, borderRadius: 8 }}
            />
          </Box>
          <VStack space={2} flex={1}>
            <Text fontWeight={700} fontSize={16}>
              {restaurant.name}
            </Text>
            <HStack alignItems={"center"} space={2}>
              <Location
                size="16"
                color={colors.coolGray[500]}
                style={{ marginRight: -4 }}
              />
              <Text fontSize={12} fontWeight={400} color={colors.coolGray[500]}>
                {DistrictName(restaurant.district!)} - {distanceUser.toFixed(2)}{" "}
                Km
              </Text>
            </HStack>
            <HStack alignItems={"center"} space={1}>
              <Star1 size="16" color={colors.yellow[400]} variant="Bold" />
              <Text fontSize={12} fontWeight={400}>
                {restaurant.rating?.toFixed(1) || 0}
              </Text>
              <Text fontSize={12} fontWeight={400}>
                ({restaurant.commentCount || 0} đánh giá)
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({});
