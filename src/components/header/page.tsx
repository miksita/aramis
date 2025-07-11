"use client";
import { useState, useEffect } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  styled,
  Box,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Logo from '../../../public/icons/logo.svg'
import Image from 'next/image';
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";

const navItems = [
  { id: 1, title: "О нас", path: "/about" },
  { id: 2, title: "Услуги", path: "/servises" },
  { id: 3, title: "Наши животные", path: "/animals" },
  { id: 4, title: "Галерея", path: "/gallery" },
  { id: 5, title: "Цены", path: "/price" },
  { id: 6, title: "Контакты", path: "/contacts" },
];

const contactInfo = {
  phone: "+7 (951) 015-25-11",
  address: "Приморский край, с. Гоголевка ул. Центральная 7а",
};

const MenuButton = styled(IconButton)({
  width: 40,
  height: 40,
  padding: 0,
  "& svg": {
    width: "100%",
    height: "100%",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
});

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const isMobile = useMediaQuery("(max-width:899px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full text-base font-medium fixed top-0 left-0 z-50 transition-all duration-300 bg-white/50  ${
        scrolled
          ? "bg-white/30 bg-opacity-100 backdrop-blur-sm "
          : "bg-transparent"
      }`}
    > 
      {!isMobile && (
        <div className="mx-auto px-60 font-medium">
          <div className="flex items-center justify-between py-6">
            <Link href="/" className="mr-10">
              <Image
              src={Logo}
              alt='лого Арамис'
              className='w-12 h-12'
              />
            </Link>

            <nav className="flex flex-1 justify-center space-x-10">
              {navItems.map((item) => (
                <Link key={item.id} href={item.path} className="relative group">
                  {item.title}
                  <span className="navbar-inline"></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-6">
              <Link href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="mr-20">
                {contactInfo.phone}
              </Link>
              <div className="flex items-center">
                <Link href="/" className="text-right">
                  {contactInfo.address.split(', ').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </Link>
                <FiMapPin className="ml-4" />
              </div>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <>
          <MenuButton
            onClick={toggleMenu}
            sx={{
              position: "fixed",
              top: 16,
              right: 12,
              zIndex: 1200,
              color: "black",
            }}
          >
            <svg viewBox="0 0 30 30" fill="none">
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </MenuButton>

          <Drawer
            anchor="right"
            open={open}
            onClose={toggleMenu}
            sx={{
              "& .MuiDrawer-paper": {
                width: "60%",
                padding: 1,
                backgroundColor: "white", 
                color: "black",
                fontSize: "18px",
              },
            }}
          >
            <Box display="flex" justifyContent="flex-end">
              <IconButton
                onClick={toggleMenu}
                sx={{
                  color: "gray",
                  "& .MuiSvgIcon-root": {
                    fontSize: "2rem",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={toggleMenu}>
                  <Link href="/">Главная</Link>
                </ListItemButton>
              </ListItem>
              
              {navItems.map((item) => (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton onClick={toggleMenu}>
                    <Link href={item.path}>{item.title}</Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      )}
    </div>
  );
}