import { Card, CardContent, Typography } from "@mui/material";

function NotificationCard({ data }) {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h6">{data.Type}</Typography>
        <Typography>{data.Message}</Typography>
        <Typography variant="caption">{data.Timestamp}</Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;