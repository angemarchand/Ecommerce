<?php

use App\Repository\UsersRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CustomerController
{
    private $usersRepository;

    public function __construct(UsersRepository $usersRepository)
    {
        $this->usersRepository = $usersRepository;
    }

    /**
     * @Route("/users/", name="add_users", methods={"POST"})
     */
    public function add(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $email = $data['email'];
        $name = $data['name'];
        $password = $data['password'];

        if (empty($email) || empty($name) || empty($email) ) {
            throw new NotFoundHttpException('Expecting mandatory parameters!');
        }

        $this->usersRepository->saveUsers($email, $name, $password);

        return new JsonResponse(['status' => 'Customer created!'], Response::HTTP_CREATED);
    }
}