<?php

namespace App\Controller;

use App\Entity\Cart;
use App\Repository\CartRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;

class GetCartByUserIdProductId extends AbstractController
{

    private $security;

    public function __construct( Security $security)
    {
        $this->security = $security;
    }

    public function __invoke(CartRepository $CartRepository)
    {
        $cart = $CartRepository->GetCartByUserIdProductId($_GET['productId'], $_GET['userId']);
        json_encode($cart);
        return $cart;
    }
}

?>