<?php

namespace App\Controller;

use App\Entity\Users;
use App\Repository\UsersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;

class UserByEmail extends AbstractController
{

    private $security;

    public function __construct( Security $security)
    {
        $this->security = $security;
    }

    public function __invoke(UsersRepository $usersRepository)
    {
        
        $idUser = $usersRepository->getUserByEmail($_GET['email']);
        json_encode($idUser);
        return $idUser;
    }
}

?>