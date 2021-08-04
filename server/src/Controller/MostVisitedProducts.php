<?php

namespace App\Controller;

use App\Entity\Products;
use App\Repository\ProductsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;

class MostVisitedProducts extends AbstractController
{

    private $security;

    public function __construct( Security $security)
    {
        $this->security = $security;
    }

    public function __invoke(ProductsRepository $productsRepository)
    {
        $products = $productsRepository->getMostVisitedProducts();
        json_encode($products);
        return $products;
    }
}

?>