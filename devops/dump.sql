-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: 192.168.16.1    Database: rockrblog
-- ------------------------------------------------------
-- Server version	5.7.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `message` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
INSERT INTO `contact` VALUES (1,'vegeta','vegeta@gmail.com','4791780755','teste super sayajin'),(2,'vegeta','vegeta@gmail.com','4791780755','teste super sayajin'),(3,'vegeta','vegeta@gmail.com','4791780755','teste super sayajin'),(4,'vegeta','vegeta@gmail.com','4791780755','teste super sayajin'),(5,'vegeta','vegeta@gmail.com','4791780755','teste super sayajin'),(6,'vegeta','vegeta@gmail.com','4791780755','teste super sayajin'),(7,'vegeta','vegeta@gmail.com','4791780755','teste super sayajin'),(8,'vegeta','vegeta@gmail.com','4791780755','teste super sayajin'),(9,'vegeta','vegeta@gmail.com','4791780755','teste super sayajin'),(10,'diego rodrigues','diego.h@gmail.com','4791780789','teste'),(11,'','','',''),(12,'teste','teste@gmail.com','9999999999',''),(13,'','','','teste teste'),(14,'','','',''),(15,'','','',''),(16,'','','',''),(17,'diego rodrigues','diego.h@gmail.com','4791780789','teste teste'),(18,'Emanuela kenoblau','manu@gmail.com','9999999999','etsteeeeeeeeeeeee'),(19,'diego rodrigues','diego.h@gmail.com','4791780789','xxxxxxx'),(20,'diego rodrigues','diego.h@gmail.com','4791780789','tesetste'),(21,'Diego Henrique Rodrigues','dev.diegorodrigues@gmail.com','5192516489','teste'),(22,'','','',''),(23,'','','',''),(24,'','','',''),(25,'','','','');
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `author` varchar(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `posted_at` date DEFAULT NULL,
  `photo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Kelsi Monahan','Qui occaecati vero et quibusdam non','saepe quia culpa','2018-06-01','offspring'),(2,'Mrs. Alexanne Schneider','Architecto quos rem unde quia accusantium','Voluptaum omnis et dolor','2018-06-01','projota'),(3,'Dagmar Ankunding','Repellat aliquam quo sit qui praesentium ut aliquid','Ea ut et labore quidem non sit in quidem. Provident est incidunt dignissimos enim qui consequatur numquam.','2018-06-01','charlieBrow'),(4,'Kelsi Monahan','Qui occaecati vero et quibusdam non','Saepe quia culpa vero.','2018-06-01','cpm22'),(5,'Mrs. Alexanne Schneider','Architecto quos rem unde quia accusantium','Voluptatum omnis et dolor architecto non totam aspernatur sapiente. Et accusantium rem. Assumenda quia error','2018-06-01','skank'),(6,'Sydney Legros','Possimus saepe et illum molestiae et quibusdam','Excepturi quod aliquid impedit earum consequatur eos. In quo fuga ad odio beatae','2018-06-01','sepultura'),(7,'Kelsi Monahan','Qui occaecati vero et quibusdam non','Saepe quia culpa vero.','2018-06-01','projota'),(8,'Mrs. Alexanne Schneider','Architecto quos rem unde quia accusantium','Voluptatum omnis et dolor architecto no totam aspernatur sapiente','2018-06-01','slipknot'),(9,'Sydney Legros','Possimus saepe et illum molestiae et quibusdam','Excepturi quod aliquid impedit earum consequatur eos. In quo fuga ad odio beatae','2018-06-01','disturbed'),(10,'Kelsi Monahan','Qui occaecati vero et quibusdam non','Saepe quia culpa vero. Velit numquam corporis nihil sint enim exercitationem. Rem nulla illum sint et id dolore voluptas','2018-06-01','tavares'),(11,'Mrs. Alexanne Schneider','Architecto quos rem unde quia accusantium','Voluptatum omnis et dolor architecto non totam','2018-06-01','orappa');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-30 15:17:01
