import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { DesktopCustomCard } from "../../../CustomComponents/UI/Support/CustomCard";
import { HomePageComponentsHeading } from "../../../CustomComponents/UI/Text/HomePageHeadings";
import { CategoryChips } from "../../../CustomComponents/UI/Support/CategoryChips";
import { SubCategoriesToChips } from "./SubCategoriesToChips";
import { HowItWorksAreaInServices } from "./HowItWorksAreaInServices";
import colors, { ColorGradient } from "../../../Theme/colors";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { DividerInProjects } from "../HorizontalLine";
import { useMediaQuery } from "@material-ui/core";
import { MobileCustomCard } from "../../../CustomComponents/UI/Support/MobileCustomCard";
import { FilterOptions } from "./FilterOptions";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectSubServices,
  loadSubServices,
} from "../Slices/SubServicesPageSlices/SubServiceSlice";
import {
  loadServiceWithSubServices,
  selectServicesAndSubServices,
  selectFirstService,
} from "../Slices/HomePageSlices/SearchCardSlice";

export const ServicePage = () => {
  // redux
  const dispatch = useDispatch();
  const sub_services = useSelector(selectSubServices);
  const { isLoading } = useSelector((state) => state.subServices);
  const { hasError } = useSelector((state) => state.subServices);
  const services_and_subServices = useSelector(selectServicesAndSubServices);
  const select_defaultService = useSelector(selectFirstService);

  // from serach card
  const { loadServiceWithSubServicesHasError } = useSelector(
    (state) => state.searchByCategory
  );
  const { loadServiceWithSubServicesIsLoading } = useSelector(
    (state) => state.searchByCategory
  );

  useEffect(() => {
    dispatch(loadSubServices());
    console.log(sub_services);
    dispatch(loadServiceWithSubServices()).then(() => {
      // setSelectedCategoryChipId(services_and_subServices[0].serviceId);
      // setSubCategoriesOfSelectedCategoryChip(
      //   services_and_subServices[0].subServices
      // );
    });
    console.log("in sub services");
  }, [dispatch, services_and_subServices]);

  const isDesktopOrLaptopOrTabletScreen = useMediaQuery("(min-width: 960px)");
  // by default first one is always selected
  const [selectedCategoryChipId, setSelectedCategoryChipId] = useState("");
  const [
    subCategoriesOfSelectedCategoryChip,
    setSubCategoriesOfSelectedCategoryChip,
  ] = useState([]);

  const handleSelectedCategoryChipClick = (chip_id) => {
    setSelectedCategoryChipId(chip_id);
    setSubCategoriesOfSelectedCategoryChip(
      services_and_subServices.filter(
        (service) => service.serviceId === chip_id
      )[0].subServices
    );
    console.log(subCategoriesOfSelectedCategoryChip);
  };

  return (
    <Grid container spacing={6} justifyContent="center">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ backgroundImage: ColorGradient.lightSkyBlue }}
      >
        <HomePageComponentsHeading title="Advanced Search" />
        {/* <Grid container justifyContent="center" alignItems="center">
          <FilterOptions />
        </Grid> */}
      </Grid>
      <DividerInProjects />
      <HomePageComponentsHeading
        title="Get inspired by the Web Development services"
        margin={"0% 0% 2% 0%"}
      />

      {sub_services.map((subService) => (
        <Grid item>
          {isDesktopOrLaptopOrTabletScreen ? (
            <DesktopCustomCard isLoading={isLoading} subService={subService} />
          ) : (
            <MobileCustomCard isLoading={true} subService={subService} />
          )}
        </Grid>
      ))}

      <Grid container justifyContent="flex-end">
        <Box p={isDesktopOrLaptopOrTabletScreen ? 2 : 0} mr={6}>
          <Link>See More Projects</Link>
        </Box>
      </Grid>
      <DividerInProjects />

      <HomePageComponentsHeading
        title="See also Related Projects"
        margin={"0% 0% 2% 0%"}
      />
      <HomePageComponentsHeading title="How it Works" margin={"0% 0% 2% 0%"} />

      <HowItWorksAreaInServices />
      <DividerInProjects />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ backgroundImage: ColorGradient.lightSkyBlue }}
      >
        <HomePageComponentsHeading
          title="Browse more categories"
          margin={"0% 0% 2% 0%"}
        />
        <Grid container>
          <Grid md={1} xs={1} sm={1} item></Grid>
          <Grid md={10} xs={10} sm={10} item container>
            {!loadServiceWithSubServicesIsLoading &&
              services_and_subServices.map((service) => (
                <CategoryChips
                  label={service.title}
                  margin={"0% 1% 2% 0%"}
                  id={service.serviceId}
                  // color={colors.white}
                  // bgColor={colors.primary}
                  handleClick={handleSelectedCategoryChipClick}
                />
              ))}
          </Grid>
          <Grid md={1} xs={1} sm={1} item></Grid>
        </Grid>
      </Grid>
      {!loadServiceWithSubServicesIsLoading && (
        <SubCategoriesToChips
          selectedCategoryChipId={selectedCategoryChipId}
          subCategoriesOfSelectedCategoryChip={
            subCategoriesOfSelectedCategoryChip
          }
        />
      )}
    </Grid>
  );
};

export default ServicePage;
