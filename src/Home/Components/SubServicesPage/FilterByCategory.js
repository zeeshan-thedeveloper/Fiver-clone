import { FormControl,FormGroup, FormControlLabel,Checkbox } from "@material-ui/core";

export const FilterByCategory=()=>{
    return(
        <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          {[
            "Java",
            "HTML5",
            "CSS3",
            "JS",
            "JQuery",
            "Semantic UI",
            "ReactJS",
            "Bootstrap",
            "NodeJS",
            "Express",
            "Mongo",
          ].map((elm) => {
            return (
              <FormControlLabel
                value="top"
                control={<Checkbox color="primary" />}
                label={elm}
                labelPlacement="start"
              />
            );
          })}
        </FormGroup>
      </FormControl>
    )
}