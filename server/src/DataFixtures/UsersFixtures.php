<?php

namespace App\DataFixtures;

use App\Entity\Users;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Faker\Factory as FakerFactory;

class UsersFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = FakerFactory::create();

        for ($i = 0; $i < 50; $i++) {
            $customer = new Users;
            $customer->setEmail($faker->email);
            $customer->setName($faker->lastName);
            $customer->setPassword($faker->password);
            $customer->setCreatedAt(new \DateTime());
            $customer->setModifiedAt(new \DateTime());
            $manager->persist($customer);
        }

        $manager->flush();
    }
}
