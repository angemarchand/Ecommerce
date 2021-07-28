<?php

namespace App\Controller;

use App\Entity\Pictures;
use App\Repository\PicturesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;

class PicturesByProduct extends AbstractController
{
    public function __construct(private Security $security)
    {

    }

    public function __invoke(PicturesRepository $pictureRepository)
    {
        $pictures = $pictureRepository->getPicturesByProductId($_GET['productId']);
        json_encode($pictures);
        return $pictures;
    }
}

?>