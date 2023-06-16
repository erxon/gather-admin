import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import Photo from "./Photo";
import PhotoDetails from "./PhotoDetails";
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface PhotoCardProps {
  id: string;
  type: string;
  name: string | null;
  photo: string;
  reportId: string | null;
}

export default function PhotoCard(props: PhotoCardProps) {
  return (
    <Card>
      <CardActions>
        <IconButton>
            <MoreVertIcon />
        </IconButton>
      </CardActions>
      <CardMedia
        sx={{ backgroundColor: "grey", height: 150, textAlign: "center" }}
      >
        <Photo photo={props.photo} type={props.type} />
      </CardMedia>
      <CardContent>
        {/*Change to reportID*/}
        <PhotoDetails name={props.name} type={props.type} />
      </CardContent>
    </Card>
  );
}
