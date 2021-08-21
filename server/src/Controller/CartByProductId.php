<?php

namespace App\Controller;

use App\Entity\Cart;
use App\Repository\CartRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;

class CartByProductId extends AbstractController
{

    private $security;

    public function __construct( Security $security)
    {
        $this->security = $security;
    }

    public function __invoke(CartRepository $CartRepository)
    {
        $cart = $CartRepository->deleteCartByProductId($_GET['productId']);
        json_encode($cart);
        return $cart;
    }
}

?>