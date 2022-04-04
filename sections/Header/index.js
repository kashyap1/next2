import React from "react";
import { AppBar, Container, Toolbar, Button, Typography, Link} from "@mui/material";
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import NextLink from 'next/link';
import { useRouter } from 'next/router'
import styles from "./indexStyles";

const AuthLinks = [
  {
    label: "Diet",
    link: "/diet",
    cssClass: "navLinks"
  },
  {
    label: "Workout",
    link: "/workout",
    cssClass: "navLinks"
  },
  {
    label: "Utilities",
    link: "/utilities",
    cssClass: "navLinks"
  },
];
const UnAuthLinks = [
  {
    label: "Sign In",
    link: "/signin",
    cssClass: "navLinks"
  },
  {
    label: "Sign Up",
    link: "/signup",
    cssClass: "navLinks"
  },
];



export default function Header(props) {
  const LinkData = !props.isAuthenticated ? AuthLinks : UnAuthLinks;
  const router = useRouter();
  const preventDefault = (event) => event.preventDefault();
  function handleClick( e, link) {
    router.push(link);
    // return false;
  }

  return (
    <AppBar position="relative" sx={styles.root}>
      <Toolbar>
        <Container maxWidth={false}	sx={styles.logoContainer}>
            <FitnessCenterRoundedIcon fontSize="small" sx={styles.logo} onClick={() => handleClick(null, '/')}/>
            <NextLink href="/"><Link href="#" onClick={preventDefault} color="inherit" sx={styles.companyName}>Transformers</Link></NextLink>
        </Container>
          {LinkData.map(({label, link, cssClass}, i) => <Button key={`headerLink${i}`} color="inherit" onClick={(e) => handleClick(e, link)} sx={styles[cssClass] || null}>{label}</Button>)}
    </Toolbar>
    </AppBar>

  );
}
//<div sx={styles.container}>
//   <Box
//     display="flex"
//     justifyContent="space-between"
//     flexDirection="row"
//     borderBottom={1}
//   >
//     <Box display="flex" flexDirection="row" p={1} m={1} borderBottom={0}>
//       <Box key="logo" p={1}>
//         <Link href="#">Logo</Link>
//       </Box>
//       <Box key="logotext" p={1}>
//         <Link href="#">Logo Text</Link>
//       </Box>
//     </Box>
//     <Box
//       display="flex"
//       flexDirection="row-reverse"
//       p={1}
//       m={1}
//       borderBottom={0}
//     >
//       {LinkData.map(({ label, link }) => (
//         <Box p={1} key={label}>
//           <Link href={link}>{label}</Link>
//         </Box>
//       ))}
//     </Box>
//   </Box>
// </div>