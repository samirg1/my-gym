import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const DefaultPage = ({ displayText }: { displayText: string }) => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <div
            style={{
                verticalAlign: "middle",
                position: "absolute",
                top: "50%",
                left: "50%",
                translate: "-50% -50%",
                width: "150px",
                aspectRatio: "1",
                background: "rgb(41, 72, 157)",
                color: "white",
                textAlign: "center",
                borderRadius: "25%",
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <span>{displayText}</span>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        onClick={goBack}
                        color="secondary"
                    >
                        Back
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default DefaultPage;