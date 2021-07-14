<?php

namespace ContainerXxgSy0p;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/lib/Doctrine/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder5c49a = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerd86d0 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties3f3e3 = [
        
    ];

    public function getConnection()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getConnection', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getMetadataFactory', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getExpressionBuilder', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'beginTransaction', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getCache', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getCache();
    }

    public function transactional($func)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'transactional', array('func' => $func), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->transactional($func);
    }

    public function commit()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'commit', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->commit();
    }

    public function rollback()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'rollback', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getClassMetadata', array('className' => $className), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'createQuery', array('dql' => $dql), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'createNamedQuery', array('name' => $name), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'createQueryBuilder', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'flush', array('entity' => $entity), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'clear', array('entityName' => $entityName), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->clear($entityName);
    }

    public function close()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'close', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->close();
    }

    public function persist($entity)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'persist', array('entity' => $entity), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'remove', array('entity' => $entity), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'refresh', array('entity' => $entity), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'detach', array('entity' => $entity), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'merge', array('entity' => $entity), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getRepository', array('entityName' => $entityName), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'contains', array('entity' => $entity), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getEventManager', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getConfiguration', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'isOpen', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getUnitOfWork', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getProxyFactory', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'initializeObject', array('obj' => $obj), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'getFilters', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'isFiltersStateClean', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'hasFilters', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return $this->valueHolder5c49a->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializerd86d0 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolder5c49a) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder5c49a = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder5c49a->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, '__get', ['name' => $name], $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        if (isset(self::$publicProperties3f3e3[$name])) {
            return $this->valueHolder5c49a->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder5c49a;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder5c49a;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder5c49a;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder5c49a;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, '__isset', array('name' => $name), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder5c49a;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder5c49a;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, '__unset', array('name' => $name), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder5c49a;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder5c49a;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, '__clone', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        $this->valueHolder5c49a = clone $this->valueHolder5c49a;
    }

    public function __sleep()
    {
        $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, '__sleep', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;

        return array('valueHolder5c49a');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerd86d0 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerd86d0;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerd86d0 && ($this->initializerd86d0->__invoke($valueHolder5c49a, $this, 'initializeProxy', array(), $this->initializerd86d0) || 1) && $this->valueHolder5c49a = $valueHolder5c49a;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder5c49a;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder5c49a;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
